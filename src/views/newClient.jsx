import { useNavigate, Form, useActionData } from "react-router-dom";
import Forms from "../components/Forms";
import Error from "../components/Error";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const email = formData.get("email");

  //validation
  const errors = [];
  if (Object.values(data).includes("")) {
    errors.push("All fields are required");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errors.push("email not valid");
  }

  //if errors return data
  if (Object.keys(errors).length) {
    return errors;
  }
}

function NewClient() {
  const navigate = useNavigate();
  const errors = useActionData();
  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">New client</h1>
      <p className="mt-3">fill in al the fields to register a new client</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="post" noValidate>
          <Forms />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Create client"
          />
        </Form>
      </div>
    </div>
  );
}

export { NewClient };
