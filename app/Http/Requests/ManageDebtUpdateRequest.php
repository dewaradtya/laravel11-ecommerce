<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ManageDebtUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'date' => 'required|date',
            'origin' => 'required|string',
            'amount' => 'required|decimal:0,2',
            'interest_amount' => 'required|decimal:0,2',
        ];
    }
}