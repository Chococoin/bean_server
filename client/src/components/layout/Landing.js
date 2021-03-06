import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>I secreti del Bean to Bar</h1>
          <p className='lead'>
            Registrati per avvere acceso a tutto il contenuto multimediale del
            libro del Maestro Silvio Bessone.
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Registrati
            </Link>
            <Link to='/login' className='btn btn-light'>
              Accedi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
