export function getTimeAgo(timestamp) {
    const now = new Date()
    const then = new Date(timestamp * 1000)
    const diff = Math.floor((now - then) / 1000)

    if (diff < 60) {
        return `${diff} seconds ago`
    } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} minutes ago`
    } else if (diff < 86400) {
        return `${Math.floor(diff / 3600)} hours ago`
    } else if (diff < 2592000) {
        return `${Math.floor(diff / 86400)} days ago`
    } else if (diff < 31536000) {
        return `${Math.floor(diff / 2592000)} months ago`
    } else {
        return `${Math.floor(diff / 31536000)} years ago`
    }
}
