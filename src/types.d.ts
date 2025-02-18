declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
}

interface Tokens {
  accessToken: string;  
  refreshToken: string;
}

interface ApiResponse<T> {
  data: T;
  message: string;
  sucess: boolean
}