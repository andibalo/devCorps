import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeComment } from "../../actions/post";
import Moment from "react-moment";

const CommentItem = ({
    auth,
    comment: { _id, user, avatar, text, date, name },
    postId,
    removeComment
}) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile/${user}`}>
                    <img className="round-img" src={avatar} alt="" />
                    <h4>{name}</h4>
                </Link>
            </div>
            <div>
                <p className="my-1">{text}</p>
                <p className="post-date">
                    Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
                </p>
                {auth.user._id === user && (
                    <button
                        onClick={e => removeComment(postId, _id)}
                        type="button"
                        className="btn btn-danger"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
        </div>
    );
};

CommentItem.propTypes = {
    auth: PropTypes.object.isRequired,
    removeComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { removeComment })(CommentItem);
