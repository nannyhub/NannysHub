import React from "react";
import "../../styles/parents.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

const Parents = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <br></br>
      <Row>
        <Col id="pt">
          <i class="fas fa-baby" id="ic"></i>
          mnbvcsawqaserfghhvbhjbjjkbjknlkkkkknjnljbbbbbbbbbbbbbbbbbbbblllllllllllllllllllllllllllllllllllllllll
        </Col>
        <Col id="bio">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Add your description"
                {...register("Add your description", {})}
                id="prof1"
              />
            </form>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="First name"
              {...register("First name", { required: true, maxLength: 80 })}
              id="prof"
            />
            <input
              type="text"
              placeholder="Last name"
              {...register("Last name", { required: true, maxLength: 100 })}
              id="prof"
            />
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              id="prof"
            />
            <input
              type="password"
              placeholder="Password"
              {...register("Password", { required: true, maxLength: 12 })}
              id="prof"
            />
            <div id="prof2">
              <span> Number of Children </span>

              <select {...register}>
                <option value="1 ">1 </option>
                <option value=" 2"> 2</option>
                <option value=" 3"> 3</option>
                <option value=" More"> More</option>
              </select>
            </div>

            <input type="submit" id="ww" />
          </form>
        </Col>
      </Row>
      <Row>
        <Col id="c1">
          <i class="fas fa-baby-carriage" id="ic"></i>
          szxdfghjklpiukhyjgfhjjokasjdhfkkjdsokdfjghjkojerdfhoqwpeirouihybg
        </Col>
        <Col id="c2">
          qpweoirjuthgnfmdlokfrjgihtnjkowehtoweirthguifbalonigab
        </Col>
      </Row>
      <br></br>
    </>
  );
};
export default Parents;
