import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { transactionCategoryStyles } from "@/constants"
import { cn } from "@/lib/utils"

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const {
    borderColor,
    backgroundColor,
    textColor,
    chipBackgroundColor,
  } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default

  return (
    <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
      <div className={cn('size-2 rounded-full', backgroundColor)} />
      <p className={cn('text-[12px] font-medium', textColor)}>{category}</p>
    </div>
  )
}

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead className="px-2">Transactions</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          <TableHead className="px-2">Status</TableHead>
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 max-md:hidden">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>

        <TableRow className="px-2 text-left bg-green-100">
          <TableCell className="font-medium">Amey Rane</TableCell>
          <TableCell className="font-semibold text-green-600">$100.00</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Completed</p>
            </div>
          </TableCell>
          <TableCell>14-11-2024</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Payment</p>
            </div>
          </TableCell>

        </TableRow>


        <TableRow className="px-2 text-left bg-red-100">
          <TableCell className="font-medium">McDonalds</TableCell>
          <TableCell className="font-semibold text-red-600">-$15.00</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Completed</p>
            </div>
          </TableCell>
          <TableCell>30-10-2024</TableCell>
          <TableCell>
            <div className={cn('category-badge border-cyan-900')}>
              <div className={cn('size-2 rounded-full bg-cyan-500')} />
              <p className={cn('text-[12px] font-medium text-cyan-800')}>Food and Drinks</p>
            </div>
          </TableCell>

        </TableRow>

        <TableRow className="px-2 text-left bg-green-100">
          <TableCell className="font-medium">United Airlines</TableCell>
          <TableCell className="font-semibold text-green-600">$105.00</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Completed</p>
            </div>
          </TableCell>
          <TableCell>28-10-2024</TableCell>
          <TableCell>
            <div className={cn('category-badge border-purple-900')}>
              <div className={cn('size-2 rounded-full bg-purple-500')} />
              <p className={cn('text-[12px] font-medium text-purple-800')}>Travel</p>
            </div>
          </TableCell>

        </TableRow>

        <TableRow className="px-2 text-left bg-green-100">
          <TableCell className="font-medium">Uber Refund</TableCell>
          <TableCell className="font-semibold text-green-600">$55.00</TableCell>
          <TableCell>
            <div className={cn('category-badge border-yellow-900')}>
              <div className={cn('size-2 rounded-full bg-yellow-500')} />
              <p className={cn('text-[12px] font-medium text-yellow-800')}>Pending</p>
            </div>
          </TableCell>
          <TableCell>28-10-2024</TableCell>
          <TableCell>
            <div className={cn('category-badge border-purple-900')}>
              <div className={cn('size-2 rounded-full bg-purple-500')} />
              <p className={cn('text-[12px] font-medium text-purple-800')}>Travel</p>
            </div>
          </TableCell>

        </TableRow>

        <TableRow className="px-2 text-left bg-red-100">
          <TableCell className="font-medium">Zara</TableCell>
          <TableCell className="font-semibold text-red-600">-$215.00</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Completed</p>
            </div>
          </TableCell>
          <TableCell>27-10-2024</TableCell>
          <TableCell>
            <div className={cn('category-badge border-orange-900')}>
              <div className={cn('size-2 rounded-full bg-orange-500')} />
              <p className={cn('text-[12px] font-medium text-orange-800')}>Clothes</p>
            </div>
          </TableCell>

        </TableRow>

        <TableRow className="px-2 text-left bg-green-100">
          <TableCell className="font-medium">John Smith</TableCell>
          <TableCell className="font-semibold text-green-600">$155.00</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Completed</p>
            </div>
          </TableCell>
          <TableCell>26-10-2024</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Payment</p>
            </div>
          </TableCell>

        </TableRow>

        <TableRow className="px-2 text-left bg-red-100">
          <TableCell className="font-medium">Taco Bell</TableCell>
          <TableCell className="font-semibold text-red-600">-$25.00</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Completed</p>
            </div>
          </TableCell>
          <TableCell>26-10-2024</TableCell>
          <TableCell>
            <div className={cn('category-badge border-cyan-900')}>
              <div className={cn('size-2 rounded-full bg-cyan-500')} />
              <p className={cn('text-[12px] font-medium text-cyan-800')}>Food and Drinks</p>
            </div>
          </TableCell>

        </TableRow>

        <TableRow className="px-2 text-left bg-red-100">
          <TableCell className="font-medium">American Airlines</TableCell>
          <TableCell className="font-semibold text-red-600">-$25.00</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Completed</p>
            </div>
          </TableCell>
          <TableCell>25-10-2024</TableCell>
          <TableCell>
            <div className={cn('category-badge border-purple-900')}>
              <div className={cn('size-2 rounded-full bg-purple-500')} />
              <p className={cn('text-[12px] font-medium text-purple-800')}>Travel</p>
            </div>
          </TableCell>

        </TableRow>

        <TableRow className="px-2 text-left bg-red-100">
          <TableCell className="font-medium">Interest Charges</TableCell>
          <TableCell className="font-semibold text-red-600">-$85.00</TableCell>
          <TableCell>
            <div className={cn('category-badge border-yellow-900')}>
              <div className={cn('size-2 rounded-full bg-yellow-500')} />
              <p className={cn('text-[12px] font-medium text-yellow-800')}>Pending</p>
            </div>
          </TableCell>
          <TableCell>23-10-2024</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Payment</p>
            </div>
          </TableCell>

        </TableRow>

        <TableRow className="px-2 text-left bg-green-100">
          <TableCell className="font-medium">Alex Myers</TableCell>
          <TableCell className="font-semibold text-green-600">$200.00</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Completed</p>
            </div>
          </TableCell>
          <TableCell>22-10-2024</TableCell>
          <TableCell>
            <div className={cn('category-badge border-green-900')}>
              <div className={cn('size-2 rounded-full bg-green-500')} />
              <p className={cn('text-[12px] font-medium text-green-800')}>Payment</p>
            </div>
          </TableCell>

        </TableRow>

      </TableBody>
    </Table>

  )
}

export default TransactionsTable