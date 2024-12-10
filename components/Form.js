"use client"

import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        countryCode: "+91",
        mobileNumber: "",
        email: "",
        howDidYouKnow: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let validationErrors = {};
        const nameRegex = /^[a-zA-Z\s]{3,50}$/;
        const mobileRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nameRegex.test(formData.fullName)) {
            validationErrors.fullName =
                "Name must be 3-50 characters long and contain only letters.";
        }
        if (!mobileRegex.test(formData.mobileNumber)) {
            validationErrors.mobileNumber = "Mobile number must be 10 digits long.";
        }
        if (!emailRegex.test(formData.email)) {
            validationErrors.email = "Please enter a valid email address.";
        }
        if (formData.howDidYouKnow.trim() === "") {
            validationErrors.howDidYouKnow = "This field is required.";
        }
        if (formData.message.trim().length < 0) {
            validationErrors.message = "Message must be at least 10 characters long.";
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }

        const url =
            "https://script.google.com/macros/library/d/1WhFKRMuvNows6xcGIJNmLyAAiNKxrTvPWwcUP3IrKVkB6WUyB_SuLu45/4";
        const formDataEncoded = new URLSearchParams(formData).toString();

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formDataEncoded,
            });

            // console.log(await response.ok);
            const result = await response.json();

            if (result.status === "success") {
                alert("Form submitted successfully!");
                setFormData({
                    fullName: "",
                    countryCode: "+91",
                    mobileNumber: "",
                    email: "",
                    howDidYouKnow: "",
                    message: ""
                });
                console.log(result.status);
            } else {
                alert("There was an issue submitting the form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert(
                "Thank you for contacting, I will get back to you soon as possible"
            );
        }
    };

    return ( <
            div className = "form-wrapper absolute bottom-8"
            id = "form-main" >
            <
            h1 > Contact Us < /h1>{" "} <
            form className = "form-container"
            onSubmit = { handleSubmit } >
            <
            div className = "form-group" >
            <
            label > Full Name: < /label>{" "} <
            input type = "text"
            name = "fullName"
            value = { formData.fullName }
            onChange = { handleChange }
            />{" "} {
            errors.fullName && ( <
                small className = "error" > { errors.fullName } < /small>
            )
        } { " " } <
        /div>{" "} <
    div className = "form-group" >
        <
        label > Mobile Number: < /label>{" "} <
    div className = "mobile-number-container" >
        <
        select name = "countryCode"
    value = { formData.countryCode }
    onChange = { handleChange }
    className = "country-code-select" >
        <
        option value = "+91" > +91(IND) < /option>{" "} <
    option value = "+1" > +1(USA) < /option>{" "} <
    option value = "+44" > +44(UK) < /option>{" "} <
    option value = "+61" > +61(AUS) < /option>{" "} <
    option value = "+81" > +81(JAP) < /option>{" "} < /
        select > { " " } <
        input type = "text"
    name = "mobileNumber"
    value = { formData.mobileNumber }
    onChange = { handleChange }
    className = "mobile-number-input" /
        >
        <
        /div>{" "} {
    errors.mobileNumber && ( <
        small className = "error" > { errors.mobileNumber } < /small>
    )
} { " " } <
/div>{" "} <
div className = "form-group" >
    <
    label > Email ID: < /label>{" "} <
input type = "email"
name = "email"
value = { formData.email }
onChange = { handleChange }
/>{" "} {
errors.email && < small className = "error" > { errors.email } < /small>}{" "} < /
    div > { " " } <
    div className = "form-group" >
    <
    label > How do you get to know about us ? < /label>{" "} <
select
name = "howDidYouKnow"
value = { formData.howDidYouKnow }
onChange = { handleChange } >
    <
    option value = "" > Select an option < /option>{" "} <
option value = "Google" > Google < /option>{" "} <
option value = "Social Media" > Social Media < /option>{" "} <
option value = "Friend" > Friend < /option>{" "} <
option value = "Other" > Other < /option>{" "} < /
    select > { " " } {
        errors.howDidYouKnow && ( <
            small className = "error" > { errors.howDidYouKnow } < /small>
        )
    } { " " } <
    /div>{" "} <
div className = "form-group" >
    <
    label > Write to us: < /label>{" "} <
textarea
name = "message"
value = { formData.message }
onChange = { handleChange }
rows = "2" >
    <
    /textarea>{" "} {
errors.message && ( <
    small className = "error" > { errors.message } < /small>
)
} { " " } <
/div>{" "} <
button type = "submit"
className = "submit-button" >
    Submit { " " } <
    /button>{" "} < /
    form > { " " } <
    /div>
);
}

export default Form;