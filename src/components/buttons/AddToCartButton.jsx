export default function AddToCartButton({ onClick , className }) {
    return (
        <button onClick={onClick} className={className} >
            +
        </button>
    )
}