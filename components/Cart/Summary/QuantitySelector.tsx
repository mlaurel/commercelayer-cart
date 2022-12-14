import { Errors, LineItemQuantity } from "@commercelayer/react-components"
import cn from "classnames"
import { useTranslation } from "next-i18next"
import { FC } from "react"

type Props = {
  readonly?: boolean
}

export const QuantitySelector: FC<Props> = ({ readonly }) => {
  const { t } = useTranslation()

  return (
    <div className="relative w-full">
      <div className="inline-block relative w-20">
        <LineItemQuantity
          max={10}
          data-test-id="quantity-selector"
          className={cn("appearance-none w-full bg-white  px-4 py-2 pr-7", {
            "input-base border border-gray-600 rounded": !readonly,
          })}
          readonly={readonly}
          aria-disabled={readonly}
        />
        {!readonly && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        )}
      </div>

      <Errors
        resource="line_items"
        className="absolute top-[100%] block text-xs text-red-400"
        messages={[
          {
            code: "VALIDATION_ERROR",
            resource: "line_items",
            field: "quantity",
            message: t("general.quantityNotAvailable"),
          },
        ]}
      />
    </div>
  )
}
