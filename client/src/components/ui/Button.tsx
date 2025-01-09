// import * as React from "react";

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?:
//     | "default"
//     | "destructive"
//     | "outline"
//     | "secondary"
//     | "ghost"
//     | "link";
//   size?: "default" | "sm" | "lg" | "icon";
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   (
//     { className = "", variant = "default", size = "default", ...props },
//     ref
//   ) => {
//     const baseStyles =
//       "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

//     const variants = {
//       default: "bg-primary text-white hover:bg-primary/90",
//       destructive: "bg-red-500 text-white hover:bg-red-600",
//       outline:
//         "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-900",
//       secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
//       ghost: "hover:bg-gray-100 text-gray-900",
//       link: "text-primary underline-offset-4 hover:underline",
//     };

//     const sizes = {
//       default: "h-10 px-4 py-2",
//       sm: "h-9 px-3",
//       lg: "h-11 px-8",
//       icon: "h-10 w-10",
//     };

//     const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

//     return <button className={classes} ref={ref} {...props} />;
//   }
// );

// Button.displayName = "Button";

// export { Button };

const Button = ({ variant = "primary", children, ...props }) => {
  const baseStyles =
    "flex items-center justify-center py-2 px-4 rounded-lg focus:outline-none transition duration-150";

  const variants = {
    primary:
      "px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg active:bg-blue-600 focus:ring-blue-200 hover:bg-blue-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400",
    outline:
      "bg-transparent dark:text-blue-400 px-5 py-2.5 text-sm font-medium rounded-lg text-center text-blue-800 border border-blue-500 hover:text-white hover:border-transparent hover:bg-red-700",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
