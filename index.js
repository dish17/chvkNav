function open(ref) {
    function goToOtherPage() {
        window.location.href = ref;
    }

    window.setTimeout(goToOtherPage, 1000);
}