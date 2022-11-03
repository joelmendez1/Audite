export const Form = () => {
  return (
    <form method="post" action="/backend/register.php">
      <input type="email" placeholder="E-mail" name="email"/>
      <input type="password" placeholder="password" name="pass"/>
      <button type="submit">Send</button>
    </form>
  );
};
