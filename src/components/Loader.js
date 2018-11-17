import React from "react";
import connect from "react-redux/es/connect/connect";

const Loader = props => {
  return (
    <div className="alert alert-primary text-center my-3" role="alert">
      Loading!
    </div>
  );
};

/**
 * Export connected component
 */
export default connect(state => ({
  loading: state.loading
}))(Loader);
