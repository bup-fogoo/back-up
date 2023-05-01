export function getTimeAgo(timestamp) {
    const now = new Date()
    const then = new Date(timestamp * 1000)
    const diff = Math.floor((now - then) / (1000 * 60))

    if (diff < 60) {
        return `${diff} minutes ago`
    } else if (diff < 1440) {
        return `${Math.floor(diff / 60)} hours ago`
    } else if (diff < 43200) {
        return `${Math.floor(diff / 1440)} days ago`
    } else if (diff < 525600) {
        return `${Math.floor(diff / 43200)} months ago`
    } else {
        return `${Math.floor(diff / 525600)} years ago`
    }
}
