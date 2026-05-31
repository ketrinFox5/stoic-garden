export function formatDateTime(
  dateString: string
) {
  return new Intl.DateTimeFormat(
    "ru-RU",
    {
      day: "numeric",
      month: "long",
      year: "numeric",

      hour: "2-digit",
      minute: "2-digit",
    }
  ).format(new Date(dateString))
}

export function formatDate(
  dateString: string
) {}

export function formatTime(
  dateString: string
) {}