<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
class ApplicationController extends AbstractController
{
    /**
         * @Route("/application")
         */
    public function number(): Response
    {
        return $this->render('Application.html.twig');
    }
}
