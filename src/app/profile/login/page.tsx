import Link from 'next/link';
import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Login</h2>
                <form style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="email">Email</label>
                        <input style={styles.input} type="email" id="email" name="email" required />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="password">Password</label>
                        <input style={styles.input} type="password" id="password" name="password" required />
                    </div>
                    <Link href="./page">
                    <button style={styles.button} type="submit">Login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#121212',
        color: '#ffffff',
    },
    formContainer: {
        backgroundColor: '#1e1e1e',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    title: {
        marginBottom: '1rem',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as 'column',
    },
    inputGroup: {
        marginBottom: '1rem',
    },
    label: {
        marginBottom: '0.5rem',
        display: 'block',
    },
    input: {
        width: '100%',
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #333',
        backgroundColor: '#2c2c2c',
        color: '#ffffff',
    },
    button: {
        padding: '0.75rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#6200ea',
        color: '#ffffff',
        cursor: 'pointer',
        fontSize: '1rem',
    },
};

export default LoginPage;