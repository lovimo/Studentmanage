<script>
export default {
  name: 'AuthRedirect',
  created() {
    const hash = window.location.search.slice(1)
    window.opener.location.href = window.location.origin + '/Login#' + hash
    window.close()
  }
}
</script>
