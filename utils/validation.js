export function validation(title, url) {
    console.log(title, url)
    if (!title || !url) {
        alert('both fields are required');
    }

    if (url) {
        try {
            new URL(url)
            return 1
        } catch {
            alert('enter a valid url');
            return;
        }
    }
}