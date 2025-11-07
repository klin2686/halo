interface SeverityTagProps {
  severity: string;
  text: string;
}

const SeverityTag = ({ severity, text }: SeverityTagProps) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "severe":
        return "bg-[rgba(255,80,80,0.44)]";
      case "moderate":
        return "bg-[rgba(255,170,80,0.44)]";
      case "mild":
        return "bg-[rgba(183,255,83,0.44)]";
      case "none":
        return "bg-[rgba(49, 49, 49, 0.44)]";
      default:
        return "bg-[rgba(49, 49, 49, 0.44)]";
    }
  };

  const getDotColor = (severity: string) => {
    switch (severity) {
      case "severe":
        return "bg-red-500";
      case "moderate":
        return "bg-orange-400";
      case "mild":
        return "bg-green-400";
      case "none":
        return "bg-gray-300";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div
      className={`h-[1.125rem] w-[5rem] rounded-full ${getSeverityColor(
        severity
      )} ${severity === "none" ? "border border-gray-400" : ""} flex items-center justify-center gap-[0.25rem]`}
    >
      <div className={`w-2 h-2 rounded-full ${getDotColor(severity)}`} />
      <span className="text-sm text-black font-light font-sf-pro">{text}</span>
    </div>
  );
};

export default SeverityTag;
