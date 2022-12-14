import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { useState } from "react";
import { useFormik } from "formik";

// npm install formik
function SingUp() {

const [error, setError] = useState("");

const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },

    /* validate: formikValidateUsingJoi({
      name: Joi.string().min(2).max(255).required(),
      email: Joi.string().min(6).max(255).required().email({tlds:{allow:false}}),
      password: Joi.string().min(6).max(1024).required(),
    }), */

    /* async  onSubmit(values) {
      try {
        await createUser({ ...values, biz: false });
        navigate("/sign-in");
        toast("your account is ready")
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    }, */
  });

  return(
  <> 
    <PageHeader title={"sing up"} description={"you lucky  its free"}/>

    <form action="" noValidate autoComplete="off">
    {error && <div className="alert alert-danger">{error}</div>}
        <Input
        type="email"
        label="Email"
        required
        />

        <Input
        type="password"
        label="password"
        required
        />

        <Input
        type="name"
        label="name"
        required
        />
        <br />
        <button className="singBtn">sing up</button>
    </form>
  


  </>
   
  )  
}

export default SingUp;