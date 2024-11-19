import Link from 'next/link'
import { Tent } from 'lucide-react'
import { Button } from '../ui/button'

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <Tent style={{ width: '1.5rem', height: '1.5rem' }} />
      </Link>
    </Button>
  )
}
export default Logo
