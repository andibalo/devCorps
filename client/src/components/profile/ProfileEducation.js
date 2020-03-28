import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
    education: { school, degree, fieldofstudy, current, to, from, description }
}) => {
    return (
        <div>
            <h3 class="text-dark">{school}</h3>
            <p>
                <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
                {current ? (
                    <span>Current</span>
                ) : (
                        <Moment format="YYYY/MM/DD">{to}</Moment>
                    )}
            </p>
            <p>
                <strong>Degree: </strong> {degree ? degree : (<span>-</span>)}
            </p>
            <p>
                <strong>Field of study: </strong> {fieldofstudy ? fieldofstudy : (<span>-</span>)}
            </p>
            <p>
                <strong>Description: </strong> {description ? description : (<span>-</span>)}
            </p>
        </div>
    );
};

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
};

export default ProfileEducation;
