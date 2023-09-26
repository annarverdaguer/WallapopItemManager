type EmptyListProps = {
    message: string;
}

export default function EmptyList({ message }: EmptyListProps) {
    return (
        <div className="empty-list">{message}</div>
    )
}