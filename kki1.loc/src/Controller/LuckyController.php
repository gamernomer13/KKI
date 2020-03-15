<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
class LuckyController extends AbstractController
{
    /**
         * @Route("/lucky/number")
         */
    public function number(): Response
    {
        return $this->render('zaiavka.html.twig');
    }
}
