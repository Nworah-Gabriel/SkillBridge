interface Module {
  id: string;
  code: string;
  title: string;
  progress?: number;
  admin: {
    name: string;
    email: string;
  } | null;
  status: "active" | "inactive" | "expired";
  linkStatus?: "valid" | "expired" | "inactive" | "Invitation Sent";
  description: string;
  submissions?: number;
  pendingReviews?: number;
  hasAccess?: boolean;
}

interface StatCard {
  title: string;
  value: string | number;
  icon?: string;
}

export type { Module, StatCard };
