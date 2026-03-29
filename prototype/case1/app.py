import re
import streamlit as st
from pathlib import Path

# --- Daten laden und parsen ---

def load_clusters(path: str) -> list[dict]:
    """Liest clusters.md und gibt eine Liste von Cluster-Dicts zurück."""
    text = Path(path).read_text(encoding="utf-8")
    clusters = []

    # Text auf den Cluster-Bereich einschränken (vor "## Sonstiges")
    sonstiges_match = re.search(r"\n## Sonstiges", text)
    if sonstiges_match:
        text = text[:sonstiges_match.start()]

    # Jeden Cluster-Block extrahieren (## Cluster N: ...)
    blocks = re.split(r"\n(?=## Cluster \d+:)", text)
    for block in blocks:
        if not block.startswith("## Cluster"):
            continue

        # Name
        name_match = re.match(r"## Cluster \d+: (.+)", block)
        name = name_match.group(1).strip() if name_match else "Unbekannt"

        # Häufigkeit
        freq_match = re.search(r"\*\*Häufigkeit:\*\*\s*(.+)", block)
        frequency = freq_match.group(1).strip() if freq_match else ""

        # Zusammenfassung
        summary_match = re.search(r"\*\*Zusammenfassung:\*\*\s*(.+)", block)
        summary = summary_match.group(1).strip() if summary_match else ""

        # Belege: Zeilen die mit "- " beginnen und ein Zitat enthalten
        evidence_lines = re.findall(r"^- (.+)$", block, re.MULTILINE)
        evidence = [line.strip() for line in evidence_lines if "—" in line]

        # Quellen aus Belegen extrahieren
        sources = set()
        for line in evidence:
            lower = line.lower()
            if "slack" in lower or "#" in lower or "@" in lower:
                sources.add("Slack")
            if "e-mail" in lower or "email" in lower or "an " in lower and "@" not in lower:
                sources.add("E-Mail")
            if "interview" in lower or "kunde" in lower:
                sources.add("Interview")
            if "retro" in lower or "internal" in lower or "sprint" in lower:
                sources.add("Intern")

        clusters.append({
            "name": name,
            "frequency": frequency,
            "summary": summary,
            "evidence": evidence,
            "sources": sources,
        })

    return clusters


# --- UI ---

st.set_page_config(page_title="Feedback Cluster Viewer", layout="wide")
st.title("Feedback Cluster Viewer")

data_path = Path(__file__).parent.parent.parent / "input" / "case1" / "data" / "clusters.md"

if not data_path.exists():
    st.error(f"Datei nicht gefunden: {data_path}")
    st.stop()

clusters = load_clusters(str(data_path))

# Sidebar: Filter
st.sidebar.header("Filter")
all_sources = ["Slack", "E-Mail", "Interview", "Intern"]
selected_sources = st.sidebar.multiselect(
    "Nach Quelle filtern",
    options=all_sources,
    default=all_sources,
)

# Filtern
if selected_sources:
    visible = [c for c in clusters if c["sources"] & set(selected_sources)]
else:
    visible = clusters

st.sidebar.markdown(f"**{len(visible)} von {len(clusters)} Clustern**")

# Hauptbereich
if not visible:
    st.info("Keine Cluster für die gewählten Quellen.")
else:
    for cluster in visible:
        with st.container():
            st.subheader(cluster["name"])
            col1, col2 = st.columns([2, 1])
            with col1:
                st.write(cluster["summary"])
            with col2:
                st.caption(f"Häufigkeit: {cluster['frequency']}")
                if cluster["sources"]:
                    st.caption("Quellen: " + ", ".join(sorted(cluster["sources"])))

            with st.expander("Belege"):
                for line in cluster["evidence"]:
                    st.markdown(f"> {line}")

            st.divider()
