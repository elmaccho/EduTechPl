<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthUserProperties
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $auth = Auth::user();
        if ($auth) {
            $auth->isTeacher = $auth->isTeacher();
            $auth->isStudent = $auth->isStudent();
            $auth->isAdmin = $auth->isAdmin();
        }

        return $next($request);
    }
}
