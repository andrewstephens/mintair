import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [consentChecked, setConsentChecked] = useState(false);
  const [success, setSuccess] = useState(false);

  const API_URL =
    process.env.NODE_ENV === "development"
      ? "https://mintbackendfinal.vercel.app/api/contact"
      : "https://mintbackendfinal.vercel.app/api/contact";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Show inline success alert
        setSuccess(true);
        // Clear form and reset consent
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          phone: "",
        });
        setConsentChecked(false);
        // Hide the alert after 3 seconds
        setTimeout(() => setSuccess(false), 3000);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Toaster position="top-center" />
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-20">
          Contact Us
        </h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Get in touch with our HVAC experts for a consultation.
        </p>
        {/* Inline success alert */}
        {success && (
          <div className="mt-6 mx-auto max-w-xl p-4 text-green-800 border border-green-300 rounded bg-green-50">
            Message sent successfully!
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        {/* Consent Checkbox */}
        <div className="mt-4 flex items-start space-x-2">
          <input
            type="checkbox"
            id="consent"
            checked={consentChecked}
            onChange={() => setConsentChecked(!consentChecked)}
            className="h-4 w-4 border-gray-300 rounded focus:ring-primary"
          />
          <label htmlFor="consent" className="text-sm text-gray-500">
            By clicking "Submit", I consent to join the email list and receive
            SMS from Voltaic LLC, with access to our latest offers and services.
            Message and data rates may apply. Message frequency varies. More
            details can be found in our{" "}
            <a href="/privacy-policy" className="text-blue-500 underline">
              Privacy Policy
            </a>{" "}
            and . Text "HELP" for help or contact us at info@voltaicnow.com.
            Text "STOP" to cancel.
          </label>
        </div>
        {/* Submit Button - Disabled until checkbox is checked */}
        <div className="mt-10">
          <button
            type="submit"
            disabled={!consentChecked}
            className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm 
              ${
                consentChecked
                  ? "bg-primary hover:bg-primary-dark"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Get a free consultation
          </button>
        </div>
      </form>
    </div>
  );
}

//working

// import React, { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const API_URL =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000/api/contact"
//       : "https://mintbackendfinal.vercel.app/api/contact";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         toast.success("Message sent successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           message: "",
//           phone: "",
//         });
//       } else {
//         toast.error("Failed to send message.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//       <Toaster position="top-center" />
//       <div className="mx-auto max-w-2xl text-center">
//         <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-20">
//           Contact Us
//         </h1>
//         <p className="mt-2 text-lg leading-8 text-gray-600">
//           Get in touch with our HVAC experts for a consultation.
//         </p>
//       </div>
//       <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//           <div>
//             <label
//               htmlFor="first-name"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               First name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 type="text"
//                 name="firstName"
//                 id="first-name"
//                 autoComplete="given-name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="last-name"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               Last name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 type="text"
//                 name="lastName"
//                 id="last-name"
//                 autoComplete="family-name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               Email
//             </label>
//             <div className="mt-2.5">
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 autoComplete="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               Phone
//             </label>
//             <div className="mt-2.5">
//               <input
//                 type="phone"
//                 name="phone"
//                 id="phone"
//                 autoComplete="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="message"
//               className="block text-sm font-semibold leading-6 text-gray-900"
//             >
//               Message
//             </label>
//             <div className="mt-2.5">
//               <textarea
//                 name="message"
//                 id="message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-10">
//           <button
//             type="submit"
//             className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
//           >
//             Get a free consultaion
//           </button>

//           <p className="mt-4 text-sm text-gray-500">
//             By clicking "Submit", I consent to join the email list and receive
//             SMS from Voltaic LLC, with access to our latest offers and services.
//             Message and data rates may apply. Message frequency varies. More
//             details can be found in our Privacy Policy and Terms and Conditions.
//             Text "HELP" for help or contact us at info@voltaicnow.com. Text
//             "STOP" to cancel.
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }
