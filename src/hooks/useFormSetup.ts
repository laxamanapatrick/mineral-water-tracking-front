import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface useFormSetupProps {
  schema: yup.AnyObjectSchema;
  defaultValues: Record<string, any>;
}

export const useFormSetup = ({ schema, defaultValues }: useFormSetupProps) => {
  const {
    control,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm({ defaultValues, resolver: yupResolver(schema) });

  return { control, errors, isValid, setValue, watch };
};
