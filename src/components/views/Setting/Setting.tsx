import { Card, CardAction, CardContent } from "@/components/ui/card";
import NewPasswordForm from "./NewPasswordForm";
import getCurrentUser from "@/lib/auth";

export default async function Setting() {
  const user = await getCurrentUser()



  return (
      <Card className="w-full max-w-lg mx-auto">
        <CardContent>
          <NewPasswordForm userId={user?.id} />
        </CardContent>
      </Card>
  );
}
