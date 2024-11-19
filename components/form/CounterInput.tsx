'use client'
import { Card, CardHeader } from '@/components/ui/card'
import { Minus, Plus } from 'lucide-react'

import { Button } from '../ui/button'
import { useState } from 'react'

function CounterInput({
  detail,
  defaultValue,
}: {
  detail: string
  defaultValue?: number
}) {
  const [count, setCount] = useState(defaultValue || 0)

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decreaseCount = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1
      }
      return prevCount
    })
  }
  return (
    <Card className="mb-4">
      {/* input */}
      <input type="hidden" name={detail} value={count} />
      <CardHeader className="flex flex-col gap-y-5">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col">
            <h2 className="font-medium capitalize">{detail}</h2>
            <p className="text-muted-foreground text-sm">
              Specify the number of {detail}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={decreaseCount}
            >
              <Minus
                className="text-primary"
                style={{ width: '1.25rem', height: '1.25rem' }}
              />
            </Button>
            <span className="text-xl font-bold w-5 text-center">{count}</span>
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={increaseCount}
            >
              <Plus
                className="text-primary"
                style={{ width: '1.25rem', height: '1.25rem' }}
              />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
export default CounterInput
