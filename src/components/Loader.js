import React from "react";
import { connect } from "react-redux";
import { ScaleLoader } from "react-spinners";

const Loader = props => {
  const { loading } = props;
  return (
    <div className="text-center justify-content-center my-4">
      <ScaleLoader color={"#00c6ff"} loading={loading} />
    </div>
  );
};

/**
 * Export connected component
 */
export default connect(state => ({
  loading: state.loading
}))(Loader);
