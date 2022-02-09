import './Newsletter.scss';

function Newsletter() {
  return (
    <section className="newsletter f-f f-dc f-aic">
      <h2>Sign up for beta access</h2>
      <p>
        Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.
      </p>
      <form className="f-f f-dr f-aic f-jc f-w">
        <input type="email" placeholder="Email Address" />
        <input type="submit" value="Sign Up" />
      </form>
    </section>
  );
}

export default Newsletter;