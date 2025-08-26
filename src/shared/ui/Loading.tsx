interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Loading({ size = "md", className = "" }: LoadingProps) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizes[size]} animate-spin rounded-full border-2 border-gray-200 border-t-primary-600`}
      />
    </div>
  );
}

export function LoadingSpinner({ size = "md", className = "" }: LoadingProps) {
  return <Loading size={size} className={className} />;
}
