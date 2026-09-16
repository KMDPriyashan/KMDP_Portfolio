import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "CloudPulse Real-Time Monitoring",
    slug: "cloud-analytics-v2",
    category: "fullstack",
    previewTitle: "CloudPulse Analytics",
    previewSubtitle: "cloud-analytics-v2",
    previewStats: { left: "Latency: 12ms", right: "Users: 25k+" },
    description:
      "Enterprise APM dashboard to track server metrics, logs, and distributed traces in real-time with WebSockets and GraphQL.",
    longDescription:
      "Full-stack enterprise application designed to ingest and render telemetry data from 500+ microservices in real-time.",
    tech: ["Next.js", "Go", "GraphQL", "AWS Kinesis", "TimescaleDB"],
    gradient: "from-sky-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  },
  {
    id: 2,
    title: "NexusAI Document Copilot",
    slug: "ai-document-rag",
    category: "ai",
    previewTitle: "NexusAI Knowledge Agent",
    previewSubtitle: "ai-document-rag",
    previewStats: { left: "Vectors: 1M+", right: "Embeddings: OpenAI" },
    description:
      "RAG-powered conversational assistant for searching, querying, and summarizing enterprise PDFs and technical docs.",
    longDescription:
      "High-throughput RAG system utilizing OpenAI embeddings, Pinecone vector search, and FastAPI to deliver semantic search over 10,000+ technical documents.",
    tech: ["Python", "FastAPI", "LangChain", "Pinecone", "React"],
    gradient: "from-purple-950 to-slate-900",
    borderColor: "hover:border-accent-purple/50",
    accentColor: "text-accent-purple",
  },
  {
    id: 3,
    title: "PayFlow Distributed Gateway",
    slug: "crypto-pay-v1",
    category: "fullstack",
    previewTitle: "PayFlow Global",
    previewSubtitle: "crypto-pay-v1",
    previewStats: { left: "Uptime: 99.99%", right: "Security: PCI-DSS" },
    description:
      "Low-latency payment processor with automatic failovers, webhooks, multi-currency conversion, and audit trails.",
    longDescription:
      "A cross-border financial transaction engine that processes real-time payments with automated ledger reconciliations and fraud detection.",
    tech: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker"],
    gradient: "from-emerald-950 to-slate-900",
    borderColor: "hover:border-emerald-500/50",
    accentColor: "text-emerald-400",
  },
];