import { useForm } from "react-hook-form";

export function Users() {
  const {
    register,
    formState: { errors },
  } = useForm<{ email: string }>();

  return (
    <>
      <input
        {...register("email", {
          required: { value: true, message: "the email is required" },
          maxLength: { value: 10, message: "too many characters" },
        })}
        placeholder="email"
      />
      <p>{errors.email?.message}</p>
    </>
  );
}

export default Users;
