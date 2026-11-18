export type SkillGroup = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  skills: { name: string; level: number }[];
  tools: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "offensive",
    index: "01",
    title: "Offensive Security",
    blurb: "Adversary simulation with a report the business can actually action.",
    skills: [
      { name: "Web & API pentesting", level: 96 },
      { name: "Active Directory attacks", level: 92 },
      { name: "Red team operations", level: 88 },
      { name: "Exploit development", level: 78 },
    ],
    tools: ["Burp Suite", "BloodHound", "Cobalt Strike", "Nmap", "Metasploit"],
  },
  {
    id: "defensive",
    index: "02",
    title: "Detection Engineering",
    blurb: "Telemetry first. If it is not logged, it did not happen.",
    skills: [
      { name: "SIEM & detection rules", level: 94 },
      { name: "Threat hunting", level: 90 },
      { name: "Incident response", level: 88 },
      { name: "Malware triage", level: 82 },
    ],
    tools: ["Splunk", "Elastic", "Sigma", "YARA", "Velociraptor"],
  },
  {
    id: "cloud",
    index: "03",
    title: "Cloud & Infrastructure",
    blurb: "Zero-trust boundaries that survive contact with real traffic.",
    skills: [
      { name: "AWS / Azure security", level: 91 },
      { name: "Kubernetes hardening", level: 85 },
      { name: "IAM & policy design", level: 89 },
      { name: "Network segmentation", level: 86 },
    ],
    tools: ["AWS", "Terraform", "Kubernetes", "eBPF", "Vault"],
  },
  {
    id: "engineering",
    index: "04",
    title: "Security Engineering",
    blurb: "Automation that removes toil and closes classes of bugs.",
    skills: [
      { name: "Python / Go tooling", level: 93 },
      { name: "DevSecOps pipelines", level: 87 },
      { name: "SAST / DAST integration", level: 84 },
      { name: "Secure architecture review", level: 90 },
    ],
    tools: ["Python", "Go", "GitHub Actions", "Semgrep", "Docker"],
  },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  href: string;
  status: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "sentinelmesh",
    index: "01",
    name: "SentinelMesh",
    tagline: "Distributed detection mesh for hybrid estates",
    description:
      "A lightweight sensor fleet that normalises endpoint, cloud and network telemetry into one Sigma-compatible pipeline. Cut mean time to detect from 42 minutes to under 4 across 11,000 hosts.",
    metric: "38m",
    metricLabel: "faster detection",
    tags: ["Go", "eBPF", "Sigma", "Kafka"],
    href: "https://github.com/shadowx29",
    status: "open source",
    featured: true,
  },
  {
    id: "ghostrecon",
    index: "02",
    name: "GhostRecon",
    tagline: "Passive recon, zero noise",
    description:
      "Asset discovery that maps external attack surface without ever touching the target. Certificate transparency, ASN pivots and DNS graph correlation in a single binary.",
    metric: "0",
    metricLabel: "packets sent",
    tags: ["Rust", "DNS", "CT logs"],
    href: "https://github.com/shadowx29",
    status: "open source",
  },
  {
    id: "vaultbreaker",
    index: "03",
    name: "VaultBreaker",
    tagline: "Cloud IAM privilege escalation lab",
    description:
      "An intentionally vulnerable AWS environment with 23 chained escalation paths, used to train detection engineers on what real identity abuse looks like in CloudTrail.",
    metric: "23",
    metricLabel: "escalation paths",
    tags: ["AWS", "Terraform", "CloudTrail"],
    href: "https://github.com/shadowx29",
    status: "training",
  },
  {
    id: "phantomgate",
    index: "04",
    name: "PhantomGate",
    tagline: "Zero-trust edge proxy",
    description:
      "Identity-aware reverse proxy with per-request policy evaluation and signed audit trails. Deployed in front of internal admin planes to remove the VPN from the picture.",
    metric: "99.99%",
    metricLabel: "edge uptime",
    tags: ["Go", "OPA", "mTLS"],
    href: "https://github.com/shadowx29",
    status: "production",
  },
  {
    id: "sigil",
    index: "05",
    name: "Sigil",
    tagline: "Supply-chain integrity scanner",
    description:
      "Pipeline gate that fingerprints build artefacts, verifies provenance and flags dependency drift before anything reaches a registry. Blocks typosquats and hijacked maintainer accounts.",
    metric: "1.2k",
    metricLabel: "malicious packages blocked",
    tags: ["Python", "SLSA", "SBOM"],
    href: "https://github.com/shadowx29",
    status: "open source",
  },
];

export const experience = [
  {
    role: "Senior Security Engineer",
    org: "Nexora Labs",
    period: "2023 — present",
    location: "Remote",
    points: [
      "Lead red team engagements across fintech and healthcare clients, owning scope, rules of engagement and executive debriefs.",
      "Built the detection-as-code platform now used by every blue team in the group, cutting rule drift to near zero.",
      "Mentor four engineers through OSCP and internal purple-team rotations.",
    ],
    tags: ["Red team", "Detection as code", "Leadership"],
  },
  {
    role: "Penetration Tester",
    org: "Ironclad Security",
    period: "2021 — 2023",
    location: "Berlin",
    points: [
      "Delivered 60+ web, API and Active Directory assessments for regulated clients.",
      "Disclosed 14 CVEs across authentication and deserialisation flaws in widely used middleware.",
      "Authored the internal exploit development playbook still in use today.",
    ],
    tags: ["Web", "Active Directory", "CVE research"],
  },
  {
    role: "SOC Analyst II",
    org: "Bluewave Systems",
    period: "2019 — 2021",
    location: "Hybrid",
    points: [
      "Ran tier-two triage for a 24/7 SOC covering 40,000 endpoints and three cloud tenants.",
      "Rewrote 120 noisy correlation rules, reducing false positives by 61%.",
      "Led the response to two ransomware incidents, both contained inside four hours.",
    ],
    tags: ["Incident response", "SIEM", "Threat hunting"],
  },
];

export const certifications = [
  { code: "OSCP", name: "Offensive Security Certified Professional", issuer: "OffSec", year: "2020" },
  { code: "OSEP", name: "Experienced Penetration Tester", issuer: "OffSec", year: "2022" },
  { code: "GXPN", name: "Exploit Researcher & Advanced Pentester", issuer: "GIAC", year: "2023" },
  { code: "AWS", name: "Security Specialty", issuer: "Amazon Web Services", year: "2023" },
  { code: "CKS", name: "Certified Kubernetes Security Specialist", issuer: "CNCF", year: "2024" },
  { code: "CRTO", name: "Certified Red Team Operator", issuer: "Zero-Point Security", year: "2024" },
];

export const principles = [
  "Assume breach. Design every control as if the perimeter is already gone.",
  "A finding without reproduction steps is an opinion, not a vulnerability.",
  "Automate the boring parts so humans can hunt the interesting ones.",
  "Ethics are not a checkbox: scope, consent and disclosure are the job.",
];

export const roles = [
  "Cybersecurity Engineer",
  "Red Team Operator",
  "Detection Engineer",
  "Cloud Security Architect",
];

export const stats = [
  { value: "7+", label: "years in security" },
  { value: "120+", label: "engagements delivered" },
  { value: "14", label: "CVEs disclosed" },
  { value: "4", label: "open-source tools" },
];
