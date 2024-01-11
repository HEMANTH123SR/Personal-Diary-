import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 shadow-sm py-4 px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Personal Diary
          </h1>
        </header>
        <main className="p-6">
          <section>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>All The Entries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Morning Thoughts
                    </h2>
                    <div className="flex gap-2">
                      <Button variant="outline">Edit</Button>
                      <Button variant="outline">Delete</Button>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    lacinia, nunc non interdum pellentesque, orci erat aliquet
                    libero, in interdum mauris nisi quis mauris.
                  </p>
                  <form className="space-y-4 mt-4">
                    <div className="space-y-1">
                      <Label htmlFor="edit-title">Edit Title</Label>
                      <Input
                        id="edit-title"
                        placeholder="Edit your title here"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="edit-entry">Edit Entry</Label>
                      <Textarea
                        className="min-h-[100px]"
                        id="edit-entry"
                        placeholder="Edit your thoughts here..."
                      />
                    </div>
                    <Button className="w-full" type="submit">
                      Save Changes
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Add New Entry</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Title of your entry" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="entry">Entry</Label>
                    <Textarea
                      className="min-h-[100px]"
                      id="entry"
                      placeholder="Write your thoughts here..."
                    />
                  </div>
                  <Button className="w-full" type="submit">
                    Add Entry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </main>
  );
}
