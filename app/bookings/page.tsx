import EmptyList from '@/components/home/EmptyList'
import CountryFlagAndName from '@/components/card/CountryFlagAndName'
import Link from 'next/link'

import { formatDate, formatCurrency } from '@/utils/format'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import FormContainer from '@/components/form/FormContainer'
import { IconButton } from '@/components/form/Buttons'
import { fetchBookings, deleteBookingAction } from '@/utils/actions'

async function BookingsPage() {
  const bookings = await fetchBookings()
  if (bookings.length === 0)
    return <EmptyList heading="No existing bookings found" />

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">total bookings : {bookings.length}</h4>
      <Table>
        <TableCaption>A list of your recent bookings</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="capitalize">property name</TableHead>
            <TableHead className="capitalize">country</TableHead>
            <TableHead className="capitalize">night</TableHead>
            <TableHead className="capitalize">total</TableHead>
            <TableHead className="capitalize">check in</TableHead>
            <TableHead className="capitalize">check out</TableHead>
            <TableHead className="capitalize">actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const {
              id: bookingId,
              orderTotal,
              totalNights,
              checkIn,
              checkOut,
            } = booking
            const { id: propertyId, name, country } = booking.property

            const startDate = formatDate(checkIn)
            const endDate = formatDate(checkOut)
            return (
              <TableRow key={bookingId}>
                <TableCell>
                  <Link
                    href={`/properties/${propertyId}`}
                    className="underline text-muted-foreground tracking-wide"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>
                  <CountryFlagAndName countryCode={country} />
                </TableCell>
                <TableCell>{totalNights}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{startDate}</TableCell>
                <TableCell>{endDate}</TableCell>
                <TableCell>
                  <DeleteBooking bookingId={bookingId} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

function DeleteBooking({ bookingId }: { bookingId: string }) {
  const deleteBooking = deleteBookingAction.bind(null, { bookingId })
  return (
    <FormContainer action={deleteBooking}>
      <IconButton actionType="delete" />
    </FormContainer>
  )
}

export default BookingsPage
