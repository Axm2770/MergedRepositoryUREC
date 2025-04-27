# UREC Chat Assistant

UREC Chat Assistant—a retrieval‑augmented AI assistant built to help users with questions about the University of Texas at Dallas (UTD) Recreational Center (UREC).

---

## 🎯 Features

- **Retrieval‑Augmented Generation**: Uses Chroma for indexing UREC-specific documents and Ollama local LLM for answering queries based on that context.
- **Modular Flow**: Built with LangFlow nodes: text splitting, embedding generation, vector store ingestion, prompt templating, and chat I/O.
- **Custom Prompt Template**: Enforces strict scope and style—only uses provided context, under‑3‑sentence replies, always cites `[SOURCE: RAG]`.
- **Easy Configuration**: Adjust base URL, model name, and other LLM settings via the flow JSON file.

---

## 🔧 Prerequisites

1. **Python** 3.9+ installed.
2. **Ollama** up and running locally (see [ollama.com](https://ollama.com) for setup).
3. **Chroma** vector store (automatically handled by LangFlow).
4. **LangFlow** installed:
   ```bash
   pip install langflow



⸻

🚀 Installation & Setup

	1.	Install dependencies:

pip install -r requirements.txt


	2.	Verify Ollama is reachable (default base URL is http://localhost:11434):

ollama status



⸻

🏃‍♂️ Running the Assistant

Via LangFlow UI
	1.	Start LangFlow server and import the flow:

langflow start-server --import UREC_BOT.json


	2.	Open your browser at http://localhost:7860 and interact with the UREC Chat Assistant flow.

Programmatic Use

Embed the flow into your application by loading UREC_BOT.json and invoking the ChatOllamaComponent with desired inputs.

⸻

⚙️ Configuration
	•	Flow File: UREC_BOT.json contains all node configurations (Prompt, ChatInput, ChatOutput, Ollama settings, etc.).
	•	Prompt Template: Located in the Prompt node, it defines system instructions, response style, and citation format.
	•	LLM Settings: Adjust base_url, model_name, temperature, and other sliders in the Ollama node to fine‑tune behavior.

⸻

📄 License

This project is licensed under the MIT License. See LICENSE for details.

⸻

Questions, feedback, or need help? Open an issue or reach out to the devs!

