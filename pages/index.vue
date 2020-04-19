<script>
import Normal from '~/pages/_lang/normal'
import Weed from '~/pages/_lang/weed'

var page
if (process.env.COMPILATION === 'NORMAL'){
  page = Normal
}

if (process.env.COMPILATION === 'WEED'){
  page = Weed
}

export default page
</script>
