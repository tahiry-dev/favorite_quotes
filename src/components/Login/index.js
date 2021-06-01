import LoginForm from './LoginForm';
import { Container, StyledLink } from '../Styles.styled';

const Login = () => (
    <Container>
        <div className="wrapper">
            <header>
                <h1>Sign in</h1>
                <p>Hello there! Sign in and start sharing your thoughts</p>
            </header>

            <LoginForm />

            <footer>
                <StyledLink to="/sign_up">Create account</StyledLink>
            </footer>
        </div>
    </Container>
);

export default Login;