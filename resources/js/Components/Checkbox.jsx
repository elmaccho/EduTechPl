export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'etp-checkbox focus:none focus:ring-offset-0 focus:ring-0'
            }
        />
    );
}
