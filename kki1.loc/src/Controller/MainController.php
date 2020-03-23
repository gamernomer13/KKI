<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
class MainController extends AbstractController
{
    /**
     * @Route("/")
     */
   public function index():Response
   {
       return $this->render('Main.html.twig');
   }
}
