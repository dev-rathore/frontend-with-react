import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
// import { PhoneNumberUtil } from 'google-libphonenumber';
import {
  Button,
  FormControl,
  ToggleButton,
} from "../../components";
import { ThemeLook } from "../../types/theme";
import {
  // constants,
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
  // phoneNumberSchema,
  usernameSchema,
} from "../../constants/form-handling";
import { ButtonColor, ButtonVariant } from "../../components/button/button.component";
import toast from "react-hot-toast";

const FormHandling: React.FC = () => {
  const [theme, setTheme] = useState(ThemeLook.LIGHT);
  const [loading, setLoading] = useState(false);

  const handleThemeChange = () => {
    if (theme === ThemeLook.LIGHT) {
      setTheme(ThemeLook.DARK);
    } else if (theme === ThemeLook.DARK) {
      setTheme(ThemeLook.LIGHT);
    }
  }

  // const setFormikFieldValue = (fieldName: string, data: string) => {
  //   formik.setFieldValue(fieldName, data)
  //     .then().catch((err) => console.log(err));
  // };

  // const handleChangeSelect = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { value } = target;
  //   const [countryCode, country] = value.split(', ');
  //   setFormikFieldValue('country', country);
  //   setFormikFieldValue('countryCode', countryCode);
  //   setFormikFieldValue('phoneNumber', '');
  // };

  const formik = useFormik({
    initialValues: {
      // countryCode: '+91',
      // country: 'IN',
      // phoneNumber: '',
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      // phoneNumber: phoneNumberSchema,
      firstName: firstNameSchema,
      lastName: lastNameSchema,
      email: emailSchema,
      username: usernameSchema,
      password: passwordSchema,
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const formSubmission = new Promise((
          resolve,
        ) => {
          let response = '';
          setTimeout(() => {
            response = 'Form submitted successfully';
            resolve(response);
          }, 5000);
        });
        const formResponse = await formSubmission;
        if (formResponse) {
          toast.success(formResponse as string);
          console.log(values);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
      // const parsedPhoneNumber = PhoneNumberUtil.getInstance().parse(
      //   values.phoneNumber,
      //   values.country,
      // );
      // const isValidPhoneNumber = PhoneNumberUtil.getInstance().isValidNumber(parsedPhoneNumber);
      // if (!isValidPhoneNumber) {
      //   console.log(constants.PHONE_VALIDATION_MESSAGE);
      //   return;
      // }
      // const formattedPhoneNumber = parsedPhoneNumber.getNationalNumber().toString();
      // const encodedCountryCode = encodeURIComponent(values.countryCode);
      // console.log(formattedPhoneNumber, encodedCountryCode);
    },
  });

  return (
    <div
      className={`
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        gap-8
        bg-gradient-to-r
        from-indigo-500
        via-purple-500
        to-pink-500
        px-10
        lg:px-8
      `}
    >
      <div className="absolute right-40 top-20">
        <ToggleButton
          onChange={handleThemeChange}
        />
      </div>
      <h1
        className={`
          text-5xl
          font-medium
          ${theme === ThemeLook.LIGHT ? 'text-white' : 'text-slate-900'}
          drop-shadow-[2px_2px_var(--tw-shadow-color)]
          ${theme === ThemeLook.LIGHT ? 'shadow-slate-600' : 'shadow-slate-300'}
        `}
      >
        Form Handling
      </h1>
      <form
        className={`
          flex
          flex-col
          gap-1
          w-1/2
          xl:w-2/3
          lg:w-3/4
          sm:w-full
          px-10
          py-12
          ${theme === ThemeLook.LIGHT ? 'bg-white' : 'bg-slate-900'}
          rounded
          drop-shadow-lg
        `}
        onSubmit={formik.handleSubmit}
      >
        <div className="flex gap-4 lg:flex-col lg:gap-0">
          <FormControl
            disabled={false}
            error={formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : ''}
            label="First Name"
            name="firstName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Enter your first name"
            theme={theme}
            type="text"
            value={formik.values.firstName}
          />
          <FormControl
            disabled={false}
            error={formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : ''}
            label="Last Name"
            name="lastName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            optional={true}
            placeholder="Enter your last name"
            theme={theme}
            type="text"
            value={formik.values.lastName}
          />
        </div>
        <FormControl
          disabled={false}
          error={formik.errors.username && formik.touched.username ? formik.errors.username : ''}
          label="Username"
          name="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Enter your username"
          theme={theme}
          type="text"
          value={formik.values.username}
        />
        <FormControl
          disabled={false}
          error={formik.errors.email && formik.touched.email ? formik.errors.email : ''}
          label="Email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Enter your email address"
          theme={theme}
          type="email"
          value={formik.values.email}
        />
        <FormControl
          disabled={false}
          error={formik.errors.password && formik.touched.password ? formik.errors.password : ''}
          label="Password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Enter your password"
          theme={theme}
          type="password"
          value={formik.values.password}
        />
        <div className="mt-5">
          <Button
            color={ButtonColor.PRIMARY}
            disabled={loading}
            fullWidth
            isLoading={loading}
            type="submit"
            variant={ButtonVariant.SOLID}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormHandling;
