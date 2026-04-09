import WindowFrame from './WindowFrame';

export default function ContactWindow({ onClose }) {
    return (
        <WindowFrame title="Contact" onClose={onClose}>
            <p>
                Feel free to reach out via email at{' '}
                <a href="mailto:you@example.com" className="text-blue-500 underline">you@example.com</a>.
            </p>
        </WindowFrame>
    );
}