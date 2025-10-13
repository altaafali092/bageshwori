<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::latest()->paginate(7);
        return Inertia::render('admin/Contact/Index'
        
        ,[
            'contacts' => $contacts,
        ]
    );
    }

     public function show(Contact $contact)
    {
        return Inertia::render('admin/Contact/Show',[
            'contact' => $contact,
        ]);

    }
    public function destroy(Contact $contact)
    {
         $imagePath = $contact->getRawOriginal('image');
        if ($imagePath && Storage::disk('public')->exists($imagePath)) {
            Storage::disk('public')->delete($imagePath);
        }
        $contact->delete();
        return back()->with('success','Contact deleted successfully');
    }
    
    public function status(Contact $contact)
    {
        $contact->update([
            'status'=>!$contact->status,
        ]);
        return back()->with('success','Contact status updated successfully');
    }
}
