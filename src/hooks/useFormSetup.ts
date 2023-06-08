import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface useFormSetupProps {
  schema: yup.AnyObjectSchema;
  defaultValues: Record<string, any>;
}

export const useFormSetup = ({ schema, defaultValues }: useFormSetupProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({ defaultValues, resolver: yupResolver(schema) });

  return { handleSubmit, control, errors, Controller, setValue, watch };
};