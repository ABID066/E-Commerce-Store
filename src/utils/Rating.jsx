export default function Rating ({value}) {
    return (
        <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
                <span
                    key={i}
                    className={i < value ? "text-yellow-400" : "text-gray-300"}
                >
                    ★
                </span>
            ))}
        </div>
    );
}
