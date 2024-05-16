<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=>$this->faker->name,
            'document'=>$this->faker->unique()->numberBetween(10000,99000),
            'email'=>$this->faker->email,
            'phone'=>$this->faker->phoneNumber,
            'address'=>$this->faker->address,
            'city'=> $this->faker->city,
        ];
    }
}
